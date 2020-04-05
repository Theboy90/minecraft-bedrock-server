const os = require('os');

const CONFIG_FILE_PATH = './config.json'

const UNZIPPED_SERVER_FOLDER_NAME = 'bedrock-server-1.14.32.1';
const UNZIPPED_SERVER_FOLDER_PATH = `./${UNZIPPED_SERVER_FOLDER_NAME}`;
const ZIPPED_SERVER_PATH = `${UNZIPPED_SERVER_FOLDER_PATH}.zip`;
const SERVER_EXECUTABLE_PATH = `${UNZIPPED_SERVER_FOLDER_PATH}/bedrock_server`;
const WINDOWS_SERVER_LINK = `https://minecraft.azureedge.net/bin-linux/${UNZIPPED_SERVER_FOLDER_NAME}.zip`;
const LINUX_SERVER_LINK = `https://minecraft.azureedge.net/bin-linux/${UNZIPPED_SERVER_FOLDER_NAME}.zip`;

const platform = os.platform();


module.exports = {
  CONFIG_FILE_PATH,
  UNZIPPED_SERVER_FOLDER_NAME,
  UNZIPPED_SERVER_FOLDER_PATH,
  ZIPPED_SERVER_PATH,
  SERVER_EXECUTABLE_PATH,
  WINDOWS_SERVER_LINK,
  LINUX_SERVER_LINK,
  platform
}