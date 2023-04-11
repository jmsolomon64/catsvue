import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#9c92b0',
                secondary: '#d1d1d1',
                accent: "#1f1d23",
                error: '#fb9f9f'
            }
        }
    }
});
