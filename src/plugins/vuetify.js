import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#c50e1f',
                secondary: '#717171',
                accent: '#00a6b3',
            },
        },
    },
});
