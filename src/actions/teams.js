import * as types from './action-type.js';
// 添加团队
export function addTeam(item) {
  return {
    type: types.ADD_TEAM,
    item  
  };
}

// 切换团队
export function checkTeam(team) {
  return {
    type: types.CHECK_TEAM,
    team
  };
}

//解散团队
export function deleteTeam(team){
  return {
    type:types.DELETE_TEAM,
    team
  }
}

// 添加联系人
export function addTouch(item) {
  console.log(item)
  return {
    type: types.ADD_TOUCH,
    item  
  };
}