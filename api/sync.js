const { syncAll } = require('../sync');

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const list = await syncAll();
        res.status(200).json({ success: true, count: list ? list.length : 0 });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
