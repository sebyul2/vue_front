const constant = {
  // 농가 상태
  FARM_HOUSE_STATUS : {
    // 1: 대기(입추 준비 안됨)
    // 2: 입추 준비 완료
    // 3: 분양 승인중
    // 4: 분양 승인완료
    // 5: 동 선택 완료
    // 6: 동별 입추수수 입력 완료
    // 7: 입추 완료
    WAITING: 1,
    READY_FOR_INSERT: 2,
    SALE_ING: 3,
    SALE_COMPLETE: 4,
    SELECT_HOUSE: 5,
    INSERT_QUANTITY: 6,
    INSERT_COMPLETE: 7
  }
}

module.exports = constant
