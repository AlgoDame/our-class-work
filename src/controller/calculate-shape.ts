import express, { Request, Response } from 'express';

export function calculate(params: Record<string, number>):number {
    let { a, b } = params;
    let area = a * b;
    return area;


}
