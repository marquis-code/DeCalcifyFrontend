import { GATEWAY_ENDPOINT } from '../axios.config'
import { PredictionInterface } from '@/types/prediction'  

export const predict_api = {
	$_predict_decalcification: (payload: PredictionInterface) => {
		const url = '/predict'
		return GATEWAY_ENDPOINT.post(url, payload)
	}
}