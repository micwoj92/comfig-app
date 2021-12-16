class ConfigLayer {
    constructor(name) {
        this.name = name;
    }

    get value() {
        return null;
    }
}

class ConfigMapping extends ConfigLayer {
    constructor(name, mapping) {
        super(name);
        this.mapping = mapping;
    }

    get value() {
        return this.mapping;
    }
}

class ConfigStore extends ConfigLayer {
    constructor(name, value) {
        super(name);
        this.value = value;
    }

    get value() {
        return this.value;
    }
}

