#!/bin/bash
set -u

echo "Building and testing SmartDate..."

export STAGE='dev'
export BUILD='dev'
export PROJECT_DIR="$(cd -P `dirname $BASH_SOURCE` && pwd -P)"
export BUILD_DIR=./.output
export TMP_DIR=`mktemp -d "${TMPDIR:-/tmp/}"tmp.XXXXXXXX`

cd $PROJECT_DIR && mkdir -p $BUILD_DIR || exit 1
rm -rf $BUILD_DIR/*

if [[ ! -d "node_modules" ]]; then
	echo "[watching] Installing packages ..."
	npm install -g gulp && npm link
else
	echo "Directory node_modules found, skipping 'npm install' ... if you will see errors about node modules - just remove node_modules dir and re-run watch.sh"
fi

gulp test
