
function AddLike (){
const likinig = (event) => {
    if(event.target.value === 'Like'){
        event.target.value = 'You are liked this song';
    }else{
        event.target.value = 'Like';
    }
}

    return(
        <input 
               className='button_like'
               type='reset' 
               value='Like' 
               onClick={likinig}>
        </input>
        );
}

export default AddLike;