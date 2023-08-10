const { createApp, ref, onMounted } = Vue;

createApp({
    data(){
        return{
            consulta: "",
            datos: {},
        };
    },

    created(){
        this.inicioAPI();
    },
    
    methods: {
        inicioAPI(){
            axios.get("https://www.el-tiempo.net/api/json/v2/home")
            .then((json) => {
                this.datos = json.data;
                this.datos = this.datos.ciudades;
                console.log(this.datos);
            })
        }
    }
}).mount('#app')