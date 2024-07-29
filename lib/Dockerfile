FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Alp24ni/SASAKI-MD /root/SASAKI-MD
WORKDIR /root/SASAKI-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
