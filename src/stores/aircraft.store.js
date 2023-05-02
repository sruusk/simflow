import { defineStore } from "pinia";
import aircraftList from "@/assets/aircraft.json";

export const useAircraftStore = defineStore({
    id: 'aircraft',

    state: () => ({
        aircraft: aircraftList,
        currentChecklist: undefined,
    }),

    actions: {
        getChecklist(aircraft) {
            return fetch(`${ import.meta.env.BASE_URL }aircraft/${ aircraft }.json`)
                .then(res => res.json())
                .then(data => {
                    this.currentChecklist = data;
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },

    getters: {
        showChecklist: (state) => state.currentChecklist !== undefined,
    }
});
