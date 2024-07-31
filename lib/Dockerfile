FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Alp24ni/SASAKI-MD.git /root/SASAKI-MD

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/SASAKI-MD/node_modules

# Install dependencies
WORKDIR /root/Alp24ni
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/Itxxwasi/node_modules
# mr wasi 
