import { toast } from 'react-toastify';


 
export const notify = (text, typ) =>{
                   if(typ === 'success'){
                    toast.success( 'success' );
                   } else{
                    toast.error(text);
                   }
}
    