module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
     "quotes": ["error", "single"],
     "react/react-in-jsx-scope": "off",
     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
}
