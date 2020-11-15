import { FillContent } from '../classes/FillContent.js';

if(document.getElementById('content-de') == undefined && document.getElementById('content-pl') == undefined && document.getElementById('content-cz') == undefined)
{
    void 0;
}
else
{
    let element = document.getElementsByClassName('container-middle');
    switch(element[0].id) {
        case 'content-de':
            new FillContent('content-de', {
                country : "de",
                _path: '../json/offer-pl.json',
                elementsToGenerate: 5
            });
        break;

        case 'content-pl':
            new FillContent('content-pl',{
                country : "pl",
                _path: '../json/offer-pl.json',
                elementsToGenerate: 5
            });
        break;

        case 'content-cz':
            new FillContent('content-cz',{
                country : "cz",
                _path: '../json/offer-pl.json',
                elementsToGenerate: 5
            });
        break;
        default:
        break;
    }
}




