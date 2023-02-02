import {ref} from "vue";


export const useCounter =(numeroInicial = 0) =>{

    const variable = ref(numeroInicial)


    return {
        variable,
        mas :()=> variable.value++,
        menos :()=> variable.value--
    }
}