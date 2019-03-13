import * as types from '../actions/action-type.js';
const initialState = {
    teamList: [], // 初始的团队
    touchList: [], //联系人
    currentTeam: []
};

const teamReducer = function (state = initialState, action) {
    state.currentTeam = state.teamList.length > 0 ? state.teamList[0] : {}
    switch (action.type) {
        //添加团队
        case types.ADD_TEAM:
            let team_list = state.teamList;
            team_list.push(action.item);
            break;
        //选中团队
        case types.CHECK_TEAM:
            state.currentTeam = action.team;
            break;
        //解散团队
        case types.DELETE_TEAM:
            state.currentTeam = {};
            for (let index = 0; index < state.teamList.length; index++) {
                const element = state.teamList[index];
                if (element.name === action.team.name) {
                    state.teamList.splice(index, 1);
                }
            }
            break;
        //添加联系人
        case types.ADD_TOUCH:
            let touch_list = state.touchList;
            touch_list.push(action.item);
            break;
        default:
            break;
    }
    return Object.assign({}, state);
}

export default teamReducer;