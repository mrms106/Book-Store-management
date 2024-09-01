import TextField from '@mui/material/TextField';


export default function AddInput(){
    return(
        <>
        <span>
        <TextField id="outlined-basic" label="title" variant="outlined" name='title' className='input' />
        <TextField id="outlined-basic" label="author" variant="outlined" name='author' className='input'/>
        </span>
        <span>
        <TextField id="outlined-basic" label="price" variant="outlined" name='price' type='number' className='input' />
        <TextField id="outlined-basic" label="stock" variant="outlined" name='stock' type='number' className='input'/>
        </span>
        <TextField id="outlined-basic" label="description" variant="outlined" name='description' className='input'/>
        <TextField id="outlined-basic" label="Add image link" variant="outlined" name='image' type='link' className='input'/>
        <button>Add</button>
        </>
    )
}