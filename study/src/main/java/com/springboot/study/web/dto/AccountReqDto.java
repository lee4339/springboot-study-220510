package com.springboot.study.web.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountReqDto {
	@NotBlank(message = "빈 값일 수 없습니다.")
	@Email(message = "이메일 형식을 확인해주세요.")
	private String email;
	@NotBlank
	private String name;
}
