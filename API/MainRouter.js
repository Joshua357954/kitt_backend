const express =require('express')
const router = express.Router()

// const AnnouncementRoute = require('./Routes/AnnouncementRoute.js');
// const AssignmentRoute = require('./Routes/AssignmentRoute.js');
// const FeedRoute = require('./Routes/FeedRoute.js');
// const ForumRoute = require('./Routes/ForumRoute.js');
// const MaterialsRoute = require('./Routes/MaterialsRoute.js');
// const ProfileRoute = require('./Routes/ProfileRoute.js');
// const TimetableRoute = require('./Routes/TimetableRoute.js');
const UserRoute = require('./Routes/UserRoute.js');


// router.use('/announcements', AnnouncementRoute);
// router.use('/assignments', AssignmentRoute);
// router.use('/feed', FeedRoute);
// router.use('/forum', ForumRoute);
// router.use('/materials', MaterialsRoute);
// router.use('/profile', ProfileRoute);
// router.use('/timetable', TimetableRoute);
router.use('/user', UserRoute);



module.exports = router