/**
 * sd cho compiler sd
 * function hanlde exception
 * khong tra ra mot cai gi ca
 */

const handleException = (errorMsg: string): never => {
    throw Error(errorMsg)
}

const runInfinity = () => {
    let i = 0;
    while (true && i <= 10) {
        i++;
        console.log(`... running`)
    }
}

// handleException('Just a error hehe - Miki made')
/**
 * ham tra ve: never, hay su dung de xu ly loi;
 * su dung :void -> se tra lai UNDIFINED
 * su dung : never -> ko tra gia tri gi
 */