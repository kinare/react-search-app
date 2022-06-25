import { SEARCH } from "./actions";

const initialState = {
    searchResults : [],
};

function reducer(state = initialState, action){
    switch (action.type){
        case SEARCH:
            return {
                searchResults: [
                    {
                        name: "Alex Doe",
                        phone: "+25487654345",
                        email: "alex@mail.com",
                        role: "Javascript Developer"
                    },
                    {
                        name: "John Doe",
                        phone: "+25487435454",
                        email: "john@mail.com",
                        role: "Laravel Developer"
                    },
                    {
                        name: "Annie Doe",
                        phone: "+909876544345",
                        email: "annie@mail.com",
                        role: "Human Resource"
                    },
                    {
                        name: "Margaret Doe",
                        phone: "+1976543234",
                        email: "margaret@mail.com",
                        role: "QA Engineer"
                    },
                    {
                        name: "George Doe",
                        phone: "+587654345678",
                        email: "george@mail.com",
                        role: "Accountant"
                    }
                ].filter(r => {
                    for (let key in r){
                        if (r[key].toLowerCase().indexOf(action.term.toLowerCase()) > -1)
                            return true
                    }

                    return false;
                })
            };

        default:
            return state
    }
}

export default reducer;
