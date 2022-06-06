import { combineReducers } from "redux";
import deviceReducer from "../routes/Device/reducer/deviceReducer";
import loginReducer from "../routes/Login/reducer/loginReducer";
import serviceReducer from "../routes/Services/reducer/serviceReducer";
import numberReducer from "../routes/Number/reducer/NumberReducer";
import reportsReducer from "../routes/Reports/reducer/reportsReducer";
import accoutReducer from "../routes/Systems/Accouts/reducer/accoutReducer";
import RolesReducer from "../routes/Systems/Roles/reducer/RolesReducer";
import DiaryReducer from "../routes/Systems/Diary/reducer/DiaryReducer";

const rootReducer = combineReducers({
  login: loginReducer.reducer,
  device: deviceReducer.reducer,
  service: serviceReducer.reducer,
  number:numberReducer.reducer,
  report:reportsReducer.reducer,
  accouts:accoutReducer.reducer,
  roles:RolesReducer.reducer,
  diary:DiaryReducer.reducer,
})
export default rootReducer