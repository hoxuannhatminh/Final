package com.brycen.vn.service.iml.N;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.brycen.vn.constant.*;
import com.brycen.vn.convert.Convert;
import com.brycen.vn.dto.N.*;
import com.brycen.vn.entity.*;
import com.brycen.vn.payload.response.ResponseDataCreateCalendar;
import com.brycen.vn.payload.response.ResponseInjectCalendar;
import com.brycen.vn.repositories.VaccineRepository;
import com.brycen.vn.repositories.N.AddressRepository;
import com.brycen.vn.repositories.N.InjectionCalendarRepository;
import com.brycen.vn.service.N.IInjectionCalendarService;
import com.brycen.vn.service.iml.M.VaccineServiceImpl;

@Service
public class InjectionCalendarServiceImpl implements IInjectionCalendarService {

	

	@Autowired 
	private AddressServiceImpl  addressServiceImpl;

	@Autowired
	private InjectionHistoryServiceImpl injectionHistoryServiceImpl;
	
	@Autowired
	private VaccineServiceImpl vaccineServiceImpl;
	
	@Autowired
	private InjectionCalendarRepository injectionCalendarRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private VaccineRepository vaccineRepository;
	
	@Override
	public List<InjectionCalendarDTO> getAllInjectionCalendarUser(Date today, Pageable pageable) {
		List<InjectionCalendar> listEntity  = injectionCalendarRepository.getAllAllow(today, pageable).toList();
		List<InjectionCalendarDTO> listDTO = listEntity.stream().map(item -> Convert.calendaEntityToDto(item))
				.collect(Collectors.toList());
		if(listDTO==null || listDTO.isEmpty()) return null;
		return listDTO;
	}


	@Override
	public List<InjectionCalendarDTO> getAllowByDistrict(Date today, String district, Pageable pageable) {
		List<InjectionCalendar> listEntity  = injectionCalendarRepository.getAllowByDistrict(today, district, pageable).toList();
		List<InjectionCalendarDTO> listDTO = listEntity.stream().map(item -> Convert.calendaEntityToDto(item))
				.collect(Collectors.toList());
		if(listDTO==null || listDTO.isEmpty()) return null;
		return listDTO;
	}

	@Override
	public List<InjectionCalendarDTO> getAllowByDistrictAndWard(Date today, String district, String ward,
			Pageable pageable) {
		List<InjectionCalendar> listEntity  = injectionCalendarRepository.getAllowByDistrictAndWard(today, district, ward,pageable).toList();
		List<InjectionCalendarDTO> listDTO = listEntity.stream().map(item -> Convert.calendaEntityToDto(item))
				.collect(Collectors.toList());
		if(listDTO==null || listDTO.isEmpty()) return null;
		return listDTO;
	}


	@Override
	public ResponseInjectCalendar getResponseInjectCalendar(Long customerid, String district, String ward,
			Integer page) {
		ResponseInjectCalendar result = new ResponseInjectCalendar();
		
		 Date today = Utils.getToday();
		result.setCustomerID(customerid);
		result.setToday(Convert.dateToString_HH_MM_DD_MM_YYYY(today));
		result.setDistrict(district);
		result.setWard(ward);
		if(page ==null) page = CoreConstant.FIRST_PAGE ; 
		result.setPage(page);
		
		List<Integer> numInjection = Utils.getListNumberInjection(CoreConstant.INJECTION_NUMBER);
		result.setInjectionNum(numInjection);
		
		List<DistrictDTO> listDistrict = addressServiceImpl.getAllDistrict();
		result.setListDistrict(listDistrict);
		
		InjectionHistoryDTO history = injectionHistoryServiceImpl.getTop1SortInjectionDate(customerid);
		result.setInjectionHistory(history);
		
		Pageable paging = PageRequest.of(page, CoreConstant.SIZE_PAGE);
		
		List<WardDTO> listWard ;
		List<InjectionCalendarDTO> listCalendar;
		
		if(district!=null &&  ward==null) {
				listWard = addressServiceImpl.getWardWhereDistric(district);
				listCalendar = this.getAllowByDistrict(today, district, paging);
				result.setInjectionCalendar(listCalendar);
				result.setListWard(listWard);
				
		}
		else if(district!=null && ward !=null )
		{
			listWard = addressServiceImpl.getWardWhereDistric(district);
			listCalendar = this.getAllowByDistrictAndWard(today, district, ward, paging);
			result.setInjectionCalendar(listCalendar);
			result.setListWard(listWard);
		}
		else {
			listCalendar = this.getAllInjectionCalendarUser(today,paging);
			result.setInjectionCalendar(listCalendar);
		}
		
		return result;
	}


	@Override
	public   Map<String, Object> getAllAdmin(Integer page , String sortBy) {
		
		Pageable paging = PageRequest.of(page, CoreConstant.SIZE_PAGE , Sort.by(sortBy).descending());
		Page<InjectionCalendar> pageCalenda = 	injectionCalendarRepository.findAll(paging);
		
		List<InjectionCalendarDTO> listDTO = pageCalenda.toList().stream()
						.map(item ->Convert.calendaEntityToDto(item))
						.collect(Collectors.toList());
				
		 Map<String, Object> response = new HashMap<>();
		 response.put("injectionCalendars",listDTO );
		 response.put("currentPage", pageCalenda.getNumber());
		 response.put("totalPages",pageCalenda.getTotalPages() );
		 response.put("totalItems",pageCalenda.getTotalElements() );
		return response;
	}


	@Override
	public ResponseDataCreateCalendar getDataCreateCalendar(String district, String ward) {
		ResponseDataCreateCalendar result = new ResponseDataCreateCalendar();
		
		result.setNameDistrict(district);
		result.setNameWard(ward);
		
		List<DistrictDTO> listDistrict =  addressServiceImpl.getAllDistrict() ;
		result.setListDistrict(listDistrict);
		
		List<FilterVaccineDTO> listVaccine = vaccineServiceImpl.getFilterALL();
		result.setListVaccine(listVaccine);
		
	
		if(district!=null && ward ==null)
		{
			List<WardDTO>  listWardDTO = addressServiceImpl.getWardWhereDistric(district);
			result.setListWard(listWardDTO);;
		}
		else if(district !=null && ward != null)
		{
			List<WardDTO> listWardDTO = addressServiceImpl.getWardWhereDistric(district);
			result.setListWard(listWardDTO);;
			
			InjectSiteDTO siteDTO = addressServiceImpl.getInjectSiteDTOByWard(district,ward);
			result.setInjectSite(siteDTO);
		}
			
	return 	result;
		
	}


	@Override
	public boolean createCalendarAdmin(String date, Long idAddress, Long idVaccine) {
		Date dateNoText = Convert.stringtoDate_HH_MM_DD_MM_YYYY(date);
		if(dateNoText==null) return false;
		Optional<Address> OpAdd= addressRepository.findById(idAddress);
		Optional<Vaccine>  Opvacine= vaccineRepository.findById(idVaccine);
		if(OpAdd.isPresent() && Opvacine.isPresent()) {
			InjectionCalendar calendar = new InjectionCalendar();
			calendar.setAddress(OpAdd.get());
			calendar.setInjectionDate(dateNoText);
			calendar.setVaccine(Opvacine.get());
			injectionCalendarRepository.save(calendar);
			return true;
		}
		return false;
	}
	
	
}
