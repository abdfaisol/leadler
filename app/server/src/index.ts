import emailjs from 'emailjs-com'
import CryptoJS from 'crypto-js'
import fs from 'fs'
import path from 'path'

var address = require('address');
const { pipeline } = require('stream')
const util = require('util')
const pump = util.promisify(pipeline)

export const ext = {
	emailjs,
	CryptoJS,
	address,
	pump,
	fs,
	path
}