import { Tag } from '../_models/Tag';

export interface project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectUrl: string;
    pictures: string[];
    tags: Tag[];
}