function authorizeByOrganization(req, res, next) {
    if (req.params.orgId == req.user.OrganizationId) {
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    authorize: authorizeByOrganization
};