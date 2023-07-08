import { serverTimestamp, addDoc} from 'firebase/firestore';
import { ref } from './firebase';

const submit = async (body) => {
    await addDoc(ref, {
        ...body,
        data: serverTimestamp(),
    })
}

const api = {
    submit
}

export default api;