/**
 * @apiDefine UserData
 * @apiSuccess {String} result.data.id 아이디
 * @apiSuccess {String} result.data.nicname 별명
 * @apiSuccess {String} result.data.registration_number 축산업 등록번호
 * @apiSuccess {String} result.data.name 대표자명
 * @apiSuccess {String} result.data.phone 대표번호
 * @apiSuccess {String} result.data.mobile 핸드폰번호
 * @apiSuccess {String} result.data.address 농장주소
 * @apiSuccess {Number} result.data.quantity 사육수수
 * @apiSuccess {Object[]} result.data.house 동별 시설 정보 
 * @apiSuccess {Number} result.data.house.square_meter 제곱미터
 * @apiSuccess {Number} result.data.house.pyeong 평
 * @apiSuccess {String} result.data.house.house_type 계사 형태
 * @apiSuccess {String} result.data.house.flooring_type 바닥제 종류
 * @apiSuccess {String} result.data.house.car 생계차
 * @apiSuccess {String} result.data.house.feeding 급이기
 * @apiSuccess {String} result.data.house.watering 급수기
 * @apiSuccess {String} result.data.career 사육경력
 * @apiSuccess {String} result.data.non_antibiotic_career 무항생제 사육 여부
 * @apiSuccess {String} result.data.haccp HACCP 여부
 * @apiSuccess {Date} result.data.created_at 생성(가입) 일자
 * @apiSuccess {Date} result.data.updated_at 갱신 일자
 */

/**
 * 
 * @api {get} /user 01. 회원 정보 리스트
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup users
 *
 * @apiSuccess {Object} res
 * @apiSuccess {String} res.result 성공시 "success", 실패시 "error" 반환
 * @apiSuccess {Object[]} res.data 리턴 데이터
 * @apiUse UserData
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "result": "success",
 *     "data": [
 *       { 
 *         id: 'psynamer@gmail.com',
 *         nickname: '박성용농가',
 *         password: '12341234',
 *         registration_number: '1234567890',
 *         name: '박성용',
 *         phone: '041-1234-1234',
 *         mobile: '010-2894-8494',
 *         address: '대전시 관저동 1114번지',
 *         total_quantity: 1000000,
 *         latest_quantity: 800000,
 *         house: [
 *           {
 *             square_meter: 100,
 *             pyeong: 30,
 *             house_type: "유창(판넬)",
 *             flooring_type: "콘크리트",
 *             car: "생계차, 병아리차",
 *             feeding: "디스크",
 *             watering: "니플"
 *           }
 *         ],
 *         career: '10년',
 *         non_antibiotic_career: '없음',
 *         haccp: '아니오',
 *         updated_at: 2018-05-06T11:17:30.278Z,
 *         created_at: 2018-05-06T11:17:30.278Z,
 *       } 
 *    ]
 * }
 *
 * @apiError result 'error'
 * @apiError code 오류 코드
 * @apiError msg 에러 메시지
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "result": "error",
 *       "code": "100001",
 *       "msg": "unexpected error"
 *     }
 */
