echo off
chcp 65001
for %%i in (*.php) do (
	php -f %%i
	echo compile %%i
	del %%i
	echo delete %%i
)
