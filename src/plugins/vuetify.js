import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                errorLight:'#FD49A0',
                sky:'#48b4e0',
                ripe:'#F9B253',
                readOnly:'#F6F6F6',
                txt:'#696969'
            },
        },
    },
});
