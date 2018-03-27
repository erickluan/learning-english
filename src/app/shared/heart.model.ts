export class Heart {
    constructor(
        public full: boolean,
        public urlFullHeart = '/assets/full_heart.svg',
        public urlEmptyHeart = '/assets/empty_heart.svg'
    ) {}
    public showHeart(): string {
        if (this.full === true ) {
            return this.urlFullHeart;
        } else {
            return this.urlEmptyHeart;
        }
    }
}
