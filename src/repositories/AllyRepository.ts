import { inject } from "vue";
import { AxiosStatic } from 'axios';

export class AllyRepository {
    axios = inject('axios') as AxiosStatic;

    public async retrieveAll(href: string | null, token: string | null) {
        try {
            const res = await this.axios.get(`${href}/allies`, { headers: { 'Authorization': `Bearer ${token}` } });

            if (res.status === 200) {
                return res.data;
            }
        } catch (err) {
            throw err;
        }
    }
}