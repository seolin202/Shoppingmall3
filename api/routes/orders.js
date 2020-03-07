// express loading
const express = require('express');
// express 안에 있는 모듈 중 .Router();를 쓴다
// 이것을 Router라고 상수화시킨다
const router = express.Router();

// order와 관련된 api 즉 order CRUD는 여기서 진행
router.get('/', (req, res) => {
    res.json({
        msg: "orders data get"
    });
});

// order posting api
router.post('/', (req, res) => {
    res.json({
        msg: "orders posting"
    });
});

// order patch api
router.patch('/', (req, res) => {
    res.json({
        msg: "orders updated"
    });
});

// order delete api
router.delete('/', (req, res) => {
    res.json({
        msg: "orders deleted"
    });
});

// router 모듈화시켜서 out
module.exports = router;