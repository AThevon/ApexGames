const legend = require('../Model/legends');

const getLegends = async (req, res) => {
    try {
        const legends = await legend.find();
        res.json(legends);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getLegend = async (req, res) => {
    try {
        const legend_url = req.params.id;
        const legendById = await legend.findById(legend_url);

        if(legendById) {
            res.json(legendById);
        }

        if(!legendById) {
            res.status(404).send("Legend not found");
        }

    } catch (err) {
        res.status(500).send(err);
    }
}


const createLegend = async (req, res) => {
    try {
        const newlegend = await legend.create(req.body);
        res.json(newlegend);
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateLegend = async (req, res) => {
    try {
        const updatelegend = await legend.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatelegend);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteLegend = async (req, res) => {
    try {
        const deletelegend = await legend.findByIdAndDelete(req.params.id);
        res.json(deletelegend);
    } catch (err) {
        res.status(500).send(err);
    }
}


const getLegendsByClass = async (req, res) => {
    try {
        const legend_url = req.params.class;
        const legendByClass = await legend.find({ class: legend_url });

        if(legendByClass) {
            res.json(legendByClass);
        }

        if(!legendByClass) {
            res.status(404).send("Legend not found");
        }

    } catch (err) {
        res.status(500).send(err);
    }
}


const getLegendClasses = async (req, res) => {
    try {
        const legendClasses = await legend.distinct('class');
        res.json(legendClasses);
    } catch (err) {
        res.status(500).send(err);
    }
}


module.exports = {
    getLegends,
    getLegend,
    createLegend,
    updateLegend,
    deleteLegend, 
    getLegendsByClass,
    getLegendClasses
};