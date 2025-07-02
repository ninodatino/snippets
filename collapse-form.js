$w.onReady(function () {
    $w('#formRegistration').collapse(); //inital condition
    //onReady for Dataset
    $w('#dynamicDataset').onReady(() => {
        const dynamicItem = $w('#dynamicDataset').getCurrentItem(); //read the dataset item
        //condition CMS boolean field 'showForm' to expand/collapse form
        if (dynamicItem.showForm) {
            $w('#formRegistration').expand();
        } else {
            $w('#formRegistration').collapse();
        }

    })
});
