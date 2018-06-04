app.filter('selectedItems', function(myService) {
    return function(jsonData, arrayManufacturer, arrayStorage, arrayOs, arrayCamera) {

        var filteredArray = []; //filtered elements
        var tempArray = []; //stores data to perform next operations
        var manufacturer="manufacturer";
        var storage="storage";
        var os="os";
        var camera="camera";
        if (jsonData != undefined) {

            tempArray = jsonData;

            if (arrayManufacturer.length > 0) {
                // for (var i = 0; i < tempArray.length; i++) {
                //     var element = tempArray[i];
                //
                //     for (var j = 0; j < arrayManufacturer.length; j++) {
                //         var selectedProduct = arrayManufacturer[j];
                //         if (element.specs.manufacturer == selectedProduct) {
                //             filteredArray.push(element);
                //             continue;
                //         }
                //     }
                // }
              filteredArray= myService.filtringArray(tempArray,arrayManufacturer,filteredArray,manufacturer);


            if (filteredArray.length > 0) {
                tempArray = filteredArray;
                filteredArray = [];
            }
            }
            if (arrayStorage.length > 0) {
                filteredArray= myService.filtringArray(tempArray,arrayStorage,filteredArray,storage);
                tempArray = filteredArray;
                filteredArray = [];
            }

            if (arrayOs.length > 0) {
                filteredArray= myService.filtringArray(tempArray,arrayOs,filteredArray,os);
                tempArray = filteredArray;
                filteredArray = [];
            }

            if (arrayCamera.length > 0) {
                filteredArray= myService.filtringArray(tempArray,arrayCamera,filteredArray,camera);
                tempArray = filteredArray;
                filteredArray = [];
            }
        }
        return tempArray;
    };
});
