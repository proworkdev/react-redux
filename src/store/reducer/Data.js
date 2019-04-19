


const initialState = {
     inputText: '',
     item:['abc0', 'xyz', 'opq']
}

export default function(state = initialState, action) {
    console.log('reducer', action);
     switch(action.type){
        case 'CHANGE_INPUT_TEXT':
        return Object.assign({}, state , {inputText:action.text});
        case 'ADD-ITEM':
        return Object.assign({}, state,{ 
            items: state.items.concat(state.inputText),
            inputText:''
        });
        default:
        return state;
     }
   
}