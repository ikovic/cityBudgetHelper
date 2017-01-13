'use strict';

const express = require('express');
const router = express.Router();
const authorize = require('../../middleware/authorization').authorize;
const models = require('../../models');

/**
 * Organizations API
 */
router.route('/organizations')
  .get(listOrganizations)
  .put(createOrganization);

router.route('/organizations/:orgId')
  .all(authorize)
  .get(getOrganization)
  .post(updateOrganization);

function listOrganizations(req, res) {
  models.Organization.findAll()
    .then(function (value) {
      res.json(value);
    })
    .catch(function (error) {
      console.log('Error with GET organization:', error);
      res.json(error);
    });
}

function createOrganization(req, res) {
  models.Organization.create(req.body, {fields: ['title', 'description', 'OIB', 'IBAN', 'address', 'taxpayer']})
    .then(function (createdOrganization) {
      res.json(createdOrganization);
    })
    .catch(function (error) {
      console.log('Error with PUT organization:', error);
      res.json(error);
    });
}

function getOrganization(req, res) {
  models.Organization.findById(req.params.orgId)
    .then(function (value) {
      res.json(value);
    })
    .catch(function (error) {
      console.log('Error with GET organization:', error);
      res.json(error);
    });
}

function updateOrganization(req, res) {
  models.Organization.findById(req.params.orgId)
    .then(function (organization) {
      return organization.update(req.body, {fields: ['title', 'description', 'OIB', 'IBAN', 'address', 'taxpayer']})
    })
    .then(function (updatedOrganization) {
      res.json(updatedOrganization);
    })
    .catch(function (error) {
      console.log('Error with POST organization:', error);
      res.json(error);
    })
}

module.exports = router;
