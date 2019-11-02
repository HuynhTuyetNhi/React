import _ from 'lodash';
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const findUserLikeEmail = (oldObject, updateObject) =>{
    let newObject = _.clone(oldObject);
    newObject = [...updateObject];
    return newObject
}
// export const updateArray = (oldArray, updatedArray) => {
//     return [
//         ...oldArray,
//         ...updatedArray
//     ];
// }