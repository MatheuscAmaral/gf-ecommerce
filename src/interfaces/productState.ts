export interface ProductState {
    selectedStorage: {
        type: string;
        index: number;
        payload: string;
    };
    selectedPlan: {
        type: string;
        index: number;
        payload: string;
    };
}