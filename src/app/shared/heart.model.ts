export class Heart {
    constructor(
        public full: boolean,
        public urlFullHeart = '/assets/full_heart.png',
        public urlEmptyHeart = '/assets/empty_heart.png'
    ) {}
    public showHeart(): string {
        if (this.full === true ) {
            return this.urlFullHeart;
        } else {
            return this.urlEmptyHeart;
        }
    }
}
