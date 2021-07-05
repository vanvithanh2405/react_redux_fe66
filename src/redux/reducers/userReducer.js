let initialState ={
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
        {
            id: 2,
            name: "hao",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
    ],

    editUser: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        // Xóa user
        case "DELETE_USER":
            let userList = [...state.userList];
            userList = userList.filter(user=> user.id !== action.payload )

            state.userList = userList
            return {...state};
        
        case "SUBMIT": {
            console.log(action);
            const user = {...action.payload,id: Math.random()};
            console.log(user);

            // tạo một mảng userList mới và add thêm một user vào
            let addList = [...state.userList, user]

            // gắn mảng hiện tại bằng mảng mới vừa cập nhật 
            state.userList = addList

            return {...state};
        }

        case "EDIT": {
            console.log(action);
            state.editUser = action.payload;
            return {...state};
        }
        default:
            return {...state};
    }
}
