package com.brycen.vn.payload.response;

import java.util.List;

import com.brycen.vn.dto.N.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseInjectCalendar {

	private Long customerID;
	private String today;
	private String district;
	private String ward;
	private Integer page ;
	
	private InjectionHistoryDTO injectionHistory;
	private List<Integer> injectionNum;
	private List<DistrictDTO> listDistrict;
	private List<WardDTO> listWard;
	private List<InjectionCalendarDTO> injectionCalendar;
}
