package com.brycen.vn.payload.response;

import java.util.List;

import com.brycen.vn.dto.N.*;
import com.brycen.vn.dto.M.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseInjectionRegistration {
	
	private String district;
	private String ward;
	private String date;
	private Integer page ;
	
	private List<DistrictDTO> listDistrict;
	private List<WardDTO> listWard;
	private List<DateDTO> listDate;
	private List<ListInjectionRegistrationDTO> listInjectionRegistration;
}
