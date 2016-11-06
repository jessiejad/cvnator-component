modelFiles = {
    src : [

        'src/modules/styleChat/module.js',
        'src/modules/styleChat/{,**/}*.js',

        'src/modules/style/module.js',
        'src/modules/style/{,**/}*.js',

        'src/modules/form/module.js',
        'src/modules/form/{,**/}*.js',

        'src/modules/render/module.js',
        'src/modules/render/{,**/}*.js',

        'src/module.js',
        'src/models/{,**/}*.js',
        'src/services/{,**/}*.js'
    ]
};

if (exports) {
    exports.files       = modelFiles;
}