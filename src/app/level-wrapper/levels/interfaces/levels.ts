import { Component } from "@angular/core";

export interface Levels {
    name: string,
    difficulty: number,
    description: string,
    componentName: string,
    backgroundImagePath: string,
    startingDate: Date,
    resources: number,
    infrastructureEndurance: number,
}
