const getReportType = (reportType?: string) => {

    const report = reportType?.trim()?.toLowerCase();
    if (!report) {
        return ""
    }
    else if (report === "percentage") {
        return "%"
    }
    else if (report  === "streak") {
        return "🔥"
    }
    else {
        return ""
    }
}

export default getReportType;