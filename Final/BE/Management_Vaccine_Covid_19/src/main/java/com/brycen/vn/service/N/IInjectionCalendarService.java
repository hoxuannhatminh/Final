package com.brycen.vn.service.N;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;

import com.brycen.vn.dto.N.*;
import com.brycen.vn.payload.response.*;


public interface IInjectionCalendarService {
	List<InjectionCalendarDTO > getAllInjectionCalendarUser(Date today , Pageable pageable);
	List<InjectionCalendarDTO > getAllowByDistrict(Date today , String district ,Pageable pageable);
	List<InjectionCalendarDTO > getAllowByDistrictAndWard(Date today , String district , String ward ,Pageable pageable);
	
	// Tỏng hợp 3 cái trên
	ResponseInjectCalendar getResponseInjectCalendar(Long customerid , String district, 
			String ward, Integer page);
	
	Map<String, Object> getAllAdmin( Integer page ,String sortBy);
	
	ResponseDataCreateCalendar getDataCreateCalendar(String District , String Ward);
	
	boolean createCalendarAdmin(String date, Long idAddress, Long idVaccine);
	

}
