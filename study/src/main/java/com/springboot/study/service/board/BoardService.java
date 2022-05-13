package com.springboot.study.service.board;

import com.springboot.study.web.dto.board.BoardInserReqDto;
import com.springboot.study.web.dto.board.BoardRespDto;

public interface BoardService {
	public int creatBoard(BoardInserReqDto boardInserReqDto) throws Exception;
	public BoardRespDto getBoard(int boardCode) throws Exception;
}
