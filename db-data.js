const { FARM_HOUSE_STATUS } = require('./common/const')

const user = [{
    email: 'psynamer@gmail.com',
    nickname: '박성용농가',
    password: '12341234',
    registration_number: '1234567890',
    name: '박성용',
    phone: '041-1234-1234',
    mobile: '010-2894-8494',
    address: '대전시 관저동 1114번지',
    grade: '미정',
    rest: '14일',
    total_quantity: 1000000,
    latest_quantity: 1000000,
    house: [{
        house_number: 1,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 2,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 3,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 4,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 5,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
    ],
    career: '10년',
    non_antibiotic_career: '없음',
    haccp: '아니오',
    status: FARM_HOUSE_STATUS.READY_FOR_INSERT
  },
  {
    email: 'key@gmail.com',
    nickname: '기성용농가',
    password: '56785678',
    registration_number: '1234567890',
    name: '기성용',
    phone: '041-5678-5678',
    mobile: '019-2894-8494',
    address: '대전시 관저동 1115번지',
    grade: '미정',
    rest: '14일',
    total_quantity: 1000000,
    latest_quantity: 1000000,
    house: [{
        house_number: 1,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 2,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 3,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 4,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
      {
        house_number: 5,
        square_meter: 100,
        pyeong: 30,
        house_type: '유창(판넬)',
        flooring_type: '콘크리트',
        car: '생계차, 병아리차',
        feeding: '디스크',
        watering: '니플'
      },
    ],
    career: '10년',
    non_antibiotic_career: '없음',
    haccp: '아니오',
    status: FARM_HOUSE_STATUS.READY_FOR_INSERT
  },
]

const hatcheryQuantity = [{
    date: '2018-05-09',
    hatchery_id: 1,
    type: 1,
    name: '예산부화장',
    quantity: 150000
  },
  {
    date: '2018-05-09',
    hatchery_id: 2,
    type: 1,
    name: '아산부화장',
    quantity: 150000
  },{
    date: '2018-05-10',
    hatchery_id: 1,
    type: 2,
    name: '예산부화장',
    quantity: -30000
  },
  {
    date: '2018-05-10',
    hatchery_id: 2,
    type: 2,
    name: '아산부화장',
    quantity: -20000
  },{
    date: '2018-05-11',
    hatchery_id: 1,
    type: 1,
    name: '예산부화장',
    quantity: 10000
  },
  {
    date: '2018-05-11',
    hatchery_id: 2,
    type: 1,
    name: '아산부화장',
    quantity: 15000
  },{
    date: '2018-05-12',
    hatchery_id: 1,
    type: 1,
    name: '예산부화장',
    quantity: 20000
  },
  {
    date: '2018-05-12',
    hatchery_id: 2,
    type: 1,
    name: '아산부화장',
    quantity: 10000
  },{
    date: '2018-05-13',
    type: 2,
    hatchery_id: 1,
    name: '예산부화장',
    quantity: -20000
  },
  {
    date: '2018-05-13',
    hatchery_id: 2,
    type: 2,
    name: '아산부화장',
    quantity: -30000
  },{
    date: '2018-05-14',
    hatchery_id: 1,
    type: 2,
    name: '예산부화장',
    quantity: -5000
  },
  {
    date: '2018-05-14',
    hatchery_id: 2,
    type: 1,
    name: '아산부화장',
    quantity: 20000
  }
]

const hatchery = [
  {
    hatchery_id: 1,
    name: '예산부화장',
    total_quantity: 125000,
  },
  {
    hatchery_id: 2,
    name: '아산부화장',
    total_quantity: 145000,
  }
]

const dbData = {
  user: user,
  hatchery: hatchery,
  hatcheryQuantity: hatcheryQuantity
}

module.exports = dbData
